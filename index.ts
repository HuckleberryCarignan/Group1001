import { filterInhuman } from './lib/filters';
import { avengers } from './data/avengers';
import { Inhuman, isInhuman } from './interface/species';

filterInhuman(avengers, { age: 40 } );