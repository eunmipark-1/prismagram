
export default {
  Mutation : {
    createAccount: async(_, args) => {
      const {userName, email, firstName="", lastname="",bio=""} = args;
      try {
        const user = await prisma.createUser({
          userName,
          email,
          firstName,
          lastname,
          bio   
        });
        return true;
      } catch {
        return false;
      }

    }
  }
};
