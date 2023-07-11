import { ROLES } from "../../models/roles.enum";
import { User } from "../../models/user.class";

export const USER_LIST = [
    new User('demo', 'demo@example.com', 'password', ROLES.USER),
    new User('admin', 'admin@example.com', 'admin-password', ROLES.ADMIN),
];