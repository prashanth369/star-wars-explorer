export interface PeopleProps  {
    name?: string;
    height?: string;
    mass?: string;
    hair_color?: string;
    skin_color?: string;
    gender?: string;
    birth_year?: string;
};

export interface PeopleResultProp {
    person?: PeopleProps[]
}

export interface PeopleListResultProps {
    people?: PeopleListProps[]
}
export interface RequesterProps {
    url: string
}

export interface PeopleListProps {
    name?: string;
  }