import React, { useEffect, useState } from 'react';
import { Table } from '../../Table';
import { Player } from '../../../lib/player'
import playersOld from '../../../../cron/data/players-old.json';
import playersNew from '../../../../cron/data/players-new.json';
import timestamp from '../../../../cron/data/timestamp.json';
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime' // import plugin
import * as settings from '../../../../settings'
import PGHFlag from '../../../../images/PGH_Flag.png';
import PGHBanner from '../../../../images/PGH-Banner.png';

dayjs.extend(relativeTime)


const setCount = (player: Player) => {
  return player.rankedNetplayProfile.wins +
    player.rankedNetplayProfile.losses;
}

const sortAndPopulatePlayers = (players: Player[]) => {
  players = players.filter((p)=> setCount(p))
    .concat(players.filter((p)=> !setCount(p)));
  players.forEach((player: Player, i: number) => {
    if(setCount(player) > 0) {
      player.rankedNetplayProfile.rank = i + 1
    }
  })
  return players
}

export default function HomePage() {

  const rankedPlayersOld = sortAndPopulatePlayers(playersOld)
  const oldPlayersMap = new Map(
    rankedPlayersOld.map((p) => [p.connectCode.code, p]));
  
  const players = sortAndPopulatePlayers(playersNew);
  players.forEach((p) => {
    const oldData = oldPlayersMap.get(p.connectCode.code)
    if(oldData) {
      p.oldRankedNetplayProfile = oldData.rankedNetplayProfile
    }
  })

  // continuously update
  const updatedAt = dayjs(timestamp.updated);
  const [updateDesc, setUpdateDesc] = useState(updatedAt.fromNow())
  useEffect(() => {
    const interval = setInterval(
      () => setUpdateDesc(updatedAt.fromNow()), 1000*60);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center h-screen p-8">
      <img className="h-48" src={PGHBanner} alt="Pittsburgh Melee" />
      <h1 className="text-3xl m-4 text-center text-white">
        {settings.title}
      </h1>

      <div className='text-moal-yellow hover:text-yellow-50 hover:underline'><a href="https://forms.gle/PNLiJ4kmHrvpVwmw9" target='_blank'>Register your connect code</a></div>

      <div className="p-1 text-white"> Updated {updateDesc}</div>
      <Table players={players} />
      <div className="p-4 text-gray-300 flex flex-col text-center">
        <div>
          <a className="text-moal-yellow hover:text-yellow-50 hover:underline" href="https://github.com/JadaTBK/PGHSlippiLeaderboard" target='_blank'>Fork</a> of the <a className="text-moal-yellow hover:text-yellow-50 hover:underline" href='https://github.com/Grantismo/CoSlippiLeaderboard' target='_blank'>Colorado Ranked Slippi Leaderboard by blorppppp</a> </div>
        <div>
          <a href="https://www.buymeacoffee.com/blorppppp" target="_blank" rel="noreferrer"
             className="text-moal-yellow hover:text-yellow-50  mr-2 hover:underline">
            Buy blorppppp a coffee
          </a>☕
        </div>
      </div>
    </div>
  );
}
