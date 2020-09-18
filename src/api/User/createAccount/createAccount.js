
export default {
  Mutation : {
    createAccount: async(_, args) => {
      const {userName, email, firstName="", lastname="",bio=""} = args;
      const user = await prisma.createUser({
        userName,
        email,
        firstName,
        lastname,
        bio   
      });
     
      return user;
       
    }
  }
};
