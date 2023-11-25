/*

      //la méthode global fetch 
      const[utiliateurs,setutilisateurs]=usestate([])
      useeffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{return res.json()})
        .then((users)=>{setutilisateurs(users)})
      },[])

      //la méthode axios
      tout  d'abord on installe la biblio: npm install --save axios
      
        const[utilisateurs,setutilisateurs]=usestate([])
        useeffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{setutilisateurs(res.data)})
        },[])


*/