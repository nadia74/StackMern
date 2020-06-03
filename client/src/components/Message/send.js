 send = async () => {
    const { title, content } = this.state;
    let haserror = false;
    this.setState({
      errortitle: "",
    errorcontent: ""
    });

    if (!title || title.length === 0) {
      this.setState({ errortitle: "    Veuillez entrer un titre" })
      haserror = true;
    }
    else if (title.length < 3 ) {
      this.setState({ errortitle: "   Le titre doit avoir au moins 3 caracteres" })
      haserror=true;
    }
    if (!content || content.length === 0) {
      this.setState({ errorcontent: "    Veuillez rédiger votre message avant de l'envoyer" })
      haserror = true;
    }
    else if (content.length > 140 ) {
      this.setState({ errorcontent: "   Votre message doit contenir 140 caractères maximum" })
      haserror=true;
    }
    // if (!title || title.length === 0) return;
    // if (!content || content.length === 0) return;
    // if (!content || content.length > 140) return;
    if (!haserror){
    try {
      const { data } = await API.createmess({ title, content, authorId: API.getcurrentuserid() });
      window.location = "/message";
    } catch (error) {
      console.error(error.response);
      //this.setState({ error: error.response.data.text }); //on défini une propriété et error vaut donc ce qu'il y a derriere les deux points

    }
  }
  };
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
