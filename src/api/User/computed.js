import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    fullName: (parent, __, {request}) => {
      
      return `${parent.firstName} ${parent.lastname}`;
    },
    amIFollowing: async(parent, _, {request}) => {
      const { user } = request;
      const { id:parentId } = parent;
      try {
          return prisma.$exists.user({
            AND: [
              {id:user.id},
              {following_some: {id: parentId}}
            ]
        });
      
      } catch { 
        return false;
      }
      
    },
    itsMe: (parent, _, {request}) => {
      const {user} = request;
      const {id: parentId} = parent;
      return user.id === parentId;
    }
  }
}