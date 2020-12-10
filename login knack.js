$(document).ready(function(){
    var user = Knack.getUserAttributes();
          if (user.email == null){
            window.location.replace("https://res-spectacular-project-95211e.webflow.io/");
  }
  });