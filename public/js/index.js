
Vue.prototype.$http = axios
const app = new Vue({
  el: '#app',
  data: {
    currentPage: '',
    newitem: {
      name:'modele de la voiture',
      date_fin: null,
      date_debut: null,
      description:'description',
    },
    newuser: {
      name:'',
      password:'',
      password2:'',
      mail:'',
      List:'',
    },


    List:[],
    myList:[],
    myListbmw:[],
    myListmercedes:[],
    myListaudi:[],

  },

created () {
  // Ici, l'utilisation d'une fonction flêchée () => {} plutôt que function () {} est primordial !
  // sans fonction fléchée, this.myList = ... ne fonctionnera pas comme prévu
  this.$http.get('/list')
    .then(list => {
      console.log(list)
      this.List = list.data
    })
    .catch(err => {
      console.log('error', err)
    })
    this.$http.get('/list2')
      .then(list2 => {
        console.log(list2)
        this.myList = list2.data
      })
      .catch(err => {
        console.log('error', err)
      })



        this.$http.get('/list3')
          .then(list3 => {
            console.log(list3)
            this.myListbmw = list3.data
          })
          .catch(err => {
            console.log('error', err)
          })

          this.$http.get('/list5')
            .then(list5 => {
              console.log(list5)
              this.myListaudi = list5.data
            })
            .catch(err => {
              console.log('error', err)
            })
            this.$http.get('/list4')
              .then(list4 => {
                console.log(list4)
                this.myListmercedes = list4.data
              })
              .catch(err => {
                console.log('error', err)
              })
},

 methods: {
  addnewuser () {
    this.$http.post('/list', {
      name: this.newuser.name,
      password : this.newuser.password,
      password2 : this.newuser.password2,
      mail : this.newuser.mail,
    })
    .then(() => {
      this.List.push({
        name: this.newuser.name,
        password : this.newuser.password,
        password2 : this.newuser.password2,
        mail : this.newuser.mail,
      })
    })
  },

  additem2 () {
    this.$http.post('/list2', {
      name: this.newitem.name,
      date_debut: this.newitem.date_debut,
      date_fin: this.newitem.date_fin,
      description: this.newitem.description,
    })
    .then(() => {
      this.myList.push({
        name: this.newitem.name,
        date_debut: this.newitem.date_debut,
        date_fin: this.newitem.date_fin,
        description: this.newitem.description,

      })
    })
  },

  additem3 () {
    this.$http.post('/list3', {
      name: this.newitem.name,
      date_debut: this.newitem.date_debut,
      date_fin: this.newitem.date_fin,
      description: this.newitem.description,
    })
    .then(() => {
      this.myListbmw.push({
        name: this.newitem.name,
        date_debut: this.newitem.date_debut,
        date_fin: this.newitem.date_fin,
        description: this.newitem.description,
      })
    })
  },
  additem4 () {
    this.$http.post('/list4', {
            name: this.newitem.name,
            date_debut: this.newitem.date_debut,
            date_fin: this.newitem.date_fin,
            description: this.newitem.description,
    })
    .then(() => {
      this.myListmercedes.push({
        name: this.newitem.name,
        date_debut: this.newitem.date_debut,
        date_fin: this.newitem.date_fin,
        description: this.newitem.description,
      })
    })
  },


  additem5 () {
    this.$http.post('/list5', {
      name: this.newitem.name,
      date_debut: this.newitem.date_debut,
      date_fin: this.newitem.date_fin,
      description: this.newitem.description,
    })
    .then(() => {
      this.myListaudi.push({
        name: this.newitem.name,
        date_debut: this.newitem.date_debut,
        date_fin: this.newitem.date_fin,
        description: this.newitem.description,
      })
    })
  },

  deleteitem(index) {
      this.myList.splice(index, 1);
      this.$http.unset('/list2', {
        myList: this.myList
      })
      .then(() => {
        this.unset({
          myList: this.myList
          })
      })
},



  deleteitemaudi(index) {
    this.myListaudi.splice(index, 1);
  },
  deleteitembmw(index) {
    this.myListbmw.splice(index, 1);
  },
  deleteitempeugeot(index) {
    this.myListpeugeot.splice(index, 1);
  },
  deleteitemmercedes(index) {
    this.myListmercedes.splice(index, 1);
  },



  chekuser(List)
  {
    var tabContent = "";
    var a=0;
    var b=0;
    name= this.newuser.name;
    password= this.newuser.password;
      for (var i=0; i<this.List.length; i++)
      {
        if (this.List[i].name == name)
          {
            if (this.List[i].password == password)
              {
                alert('connexion réussi \n bienvenue');
                a=1;
              }
              else {
                b=1;
              }
            }
//express session
        }
        if(a==0)
        {
          if (b==1)
          {
            alert('mauvais mot de passe');
          }
        else {
          alert('nom d utilisateur inconue');
        }

        }
  }



}

})
