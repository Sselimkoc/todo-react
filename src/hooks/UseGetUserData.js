export const UseGetUserData = () => {
  const { name, profilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("Auth")
  );
  console.log(
    "name, profilePhoto, userID, isAuth",
    name,
    profilePhoto,
    userID,
    isAuth
  );
  return { name, profilePhoto, userID, isAuth };
};
