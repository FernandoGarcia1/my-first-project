
export interface CharacterHp{
    name : string,    
    live : boolean,
    skills: string[],
    color : string, 
    healthPoints: number

    showHP() : void
}