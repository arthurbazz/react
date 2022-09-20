import React from "react";

const UserList = () => {
    const users = [
        {
          Name: "Arthur",
          Bio: "I am a web developer",
          Avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          Name: "Grace",
          Bio: "Product designer",
          Avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
        {
          Name: "Alex",
          Bio: "Software Engineer",
          Avatar: "https://www.w3schools.com/howto/img_avatar.png",
        },
      ];
    
      // UserList Loop
      const userlist = users.map((user) => {
        return (
          <div className="card">
            <div className="card-img">
            <img src={user.Avatar} alt="Avatar"  />  
            </div>
            <h3 className="card-name">{user.Name}</h3>
            <p>{user.Bio}</p>
          </div>
        );
      });

      return (
        <section>
          {/* display looped userlist */}
          {userlist}
        </section>
      );
}

export default UserList;