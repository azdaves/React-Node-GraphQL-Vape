const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLList
} = require("graphql");

// Student Type

const StudentType = new GraphQLObjectType ({
  name: "Student",
  fields: () => ({
    student_number: { type: GraphQLInt  },
    name: { type: GraphQLString  },
    location: { type: GraphQLString },
    message: { type: GraphQLString },
    vape_problem: { type: GraphQLBoolean },
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    students: {
      type: new GraphQLList(StudentType),
      resolve(parent, args) {
        return axios
          .get("https://api.myjson.com/bins/ieg9k")
          .then(res => res.data);
      }
    }
    
    
  }
});


module.exports = new GraphQLSchema({
  query: RootQuery
});