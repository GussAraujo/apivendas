import { getCustomRepository } from 'typeorm';
import User from '../db/entities/User';
import UsersRepository from '../db/repositories/UsersRepository';

class ListUserService {
  public async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = usersRepository.find();

    return users;
  }
}

export default ListUserService;