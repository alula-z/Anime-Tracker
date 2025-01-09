import Parse from 'parse/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  "EhVhx3OQ5gPUZ4Y43ds0BWOyavt5ydPfDsMKEWde",
  "ZXYpYxwgh12kfIqTthyIpUVWqTdN7Cq3404OkTfT"
);
Parse.serverURL = "https://parseapi.back4app.com/parse";

export default Parse;