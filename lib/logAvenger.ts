import { Person, isInhuman } from '../interface/species';
// import { avengers } from '../data/avengers';

export function logAvenger(avenger: Person) {
    // let additionalInformation: string;
    // if (isInhuman(avenger)) {
    //     additionalInformation = avenger.superpower;
    // } else {
    //     additionalInformation = avenger.occupation;
    // }
    let additionalInformation = (isInhuman(avenger)) ? avenger.superpower : avenger.occupation;
    console.log(` - ${avenger.name}, ${avenger.age}, ${additionalInformation}`);
}