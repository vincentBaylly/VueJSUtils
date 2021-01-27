export const MyMixin = {
  created() {
    //console.log("Salut je suis un element mixin");
    //gestion de conflit de nom d une propriete
    //this.logMessage();
    this.hello();
  },
  data() {
    return {
      message: "I am secondary.",
    };
  },
  methods: {
    logMessage() {
      console.log(this.message);
    },
    // gestion des conflits de nom de methode
    hello() {
      console.log("Hello from the mixin!");
    },
  },
};
