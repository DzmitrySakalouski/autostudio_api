import { Container} from "inversify";
import { IClientRepo } from "../repo";
import { ClientRepo } from "../repo";

const container = new Container();

container.bind<IClientRepo>(IClientRepo).to(ClientRepo);

export default container;
