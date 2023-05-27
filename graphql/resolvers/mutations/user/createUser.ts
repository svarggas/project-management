import { TaskStatus, TaskType } from '@prisma/client';
import { ResolverFunc } from '~/graphql';

interface createArgs {
    name: string;
    email: string;
};

const createUser: ResolverFunc<createArgs> = async (
    _parent, args, ctx, _info
) => {
    const { prisma } = ctx;
    const { name, email } = args;

    if (!name) {
        throw new Error("Name is required");
    }

    if (!email) {
        throw new Error("Email is required");
    }

    const emailExist = await prisma.user.findUnique({
        where: { email },
    });

    if (Boolean(emailExist)) {
        throw new Error("Email already exists");
    }

    const data = await prisma.user.create({
        data: {
            name,
            email,
            password: "",
        },
    });
    return Boolean(data);
};

export default createUser;