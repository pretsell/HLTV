import Team from './Team'

interface TeamRanking {
    readonly team: Team,
    readonly points: number,
    readonly place: number,
    readonly change: number,
    readonly isNew: boolean
}

export default TeamRanking
