import { isInhuman, Person, Inhuman, isHuman } from '../interface/species';
import { logAvenger } from './logAvenger';
import { avengers } from './../data/avengers';




/**
 *     Exercise #2:

    Without duplicating type structures, create a
    filterInhumans function definition so that we can
    pass only those criteria which are needed,
    and not the whole Inhuman information as it is
    required now according to typing.
    Example: Filter Inhuman Avengers with Thunder superpower OR
    Filter Inhuman Avengers by age
 */



    export function filterInhuman(persons: Person[], criteria: Inhuman ): Inhuman[] {
        console.log(`criteria = ${criteria}`);
        

        function getOnlyInhumans(person: Person[]): Inhuman[] {
            console.log(`person = ${person}`);
            return (person.filter((avenger) => avenger.type === "inhuman")) as Inhuman[];
          }

        let inHumanAvengers = getOnlyInhumans(persons);
        console.log(inHumanAvengers);
        
        return inHumanAvengers;

 
    }


    
    console.log('Inhuman with Thunder Superpower');
    
    filterInhuman(
        avengers,
        {
            superpower: 'Thunder'
        }
    ).forEach(logAvenger);
    
    // console.log('Inhuman who is 40 years old');
    
    // filterInhuman(
    //     avengers,
    //     {
    //         age: 40
    //     }
    // ).forEach(logAvenger);