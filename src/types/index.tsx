export interface PeopleProps {
    id?: string;
    name?: string;
    height?: string;
    mass?: string;
    hair_color?: string;
    skin_color?: string;
    gender?: string;
    birth_year?: string;
  }
  
  export interface PlanetProps {
    id?: string;
    name?: string;
    terrain?: string;
    population?: string;
  }
  
  export interface MovieProps {
      id?: string;
      title?: string;
      director?: string;
      producer?: string;
  }
  
  export interface PeopleResultProp {
    person?: PeopleProps[];
  }
  export interface PlaneResultProp {
    planet?: PlanetProps[];
  }
  
  export interface PeopleListResultProps {
    list?: PeopleListProps[];
  }
  
  export interface PlanetListResultProps {
    list?: PlanetListProps[];
  }
  
  export interface MovieListResultProps {
      list?: MovieListProps[];
    }
  
  export interface RequesterProps {
    url: string;
  }
  
  export interface PeopleListProps {
    name?: string;
    id?: number;
  }
  
  export interface PlanetListProps {
    name?: string;
    id?: number;
  }
  
  export interface MovieListProps {
      id?: number;
      title?: string;
  }