import * as Factory from "factory.ts";
import IPerson from '../interface/IPerson';
import { faker } from '@faker-js/faker/locale/pt_PT';


const personFactory = Factory.Sync.makeFactory<IPerson>({
  id: Factory.each((i) => i),
  firstName: faker.internet.userName(),
  lastName: faker.name.lastName(),
  fullName: faker.name.fullName(),
  age: Factory.each((i) => 20 + (i % 10)),
  password: faker.word.noun(),
});

export default personFactory;