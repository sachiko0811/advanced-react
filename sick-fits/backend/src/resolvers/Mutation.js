const Mutations = {
    async createItem(parent, args, ctx, info) {
        // TODO: Check  if they  are logged in

        const item = await ctx.db.mutation.createItem({
            data: {
                ...args,
            }
        }, info
    );

        console.log(item)

        return item;
    },
    updateItem(parent, args, ctx, info) {
        // first take a cp of the updates
        const updates = { ...args };
        // remove the ID from the updates
        delete updates.id;
        // run the  update method
        return ctx.db.mutation.updateItem({
            data: updates,
            where: {
                id: args.id
            }
        }, info
        );
    },
    // createDog(parent, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     // create a dog!
    //     const newDog  = { name: args.name };
    //     global.dogs.push(newDog);
    //     return newDog;
    //     // console.log(args)
    // },

    async deleteItem(parent, args, ctx, info) {
        const where = { id: args.id };
        // 1. find the item
        const item = await ctx.db.query.item({ where }, `{ id title}`);
        // 2. check if they own that item, or have the permissions
        // TODO
        // 3. Delete it!
        return ctx.db.mutation.deleteItem({where}, info)

    }
};

module.exports = Mutations;
