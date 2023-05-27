import { ResolverFunc } from '~/graphql';

interface deleteArgs {
    id: string;
};

const deleteUser: ResolverFunc<deleteArgs> = async (
    _parent, args, ctx, _info
) => {
    const { prisma } = ctx;
    const { id } = args;

    if (!id) {
        throw new Error("Identifier is required");
    }

    const data = await prisma.user.delete({
        where: { id },
    });
    return Boolean(data);
};

export default deleteUser;