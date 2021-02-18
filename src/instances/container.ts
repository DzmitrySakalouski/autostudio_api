import { Container} from "inversify";
import { IClientRepo } from "../repo/client.repo-type";
import { ClientRepo } from "../repo/client.repo";

const container = new Container();

container.bind<IClientRepo>(IClientRepo).to(ClientRepo);

export default container;
