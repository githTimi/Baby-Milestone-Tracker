#### SCREENSHOT OF THE APP IS IN THE ASSETS FOLDER #####
This is a Baby Milestone Tracker App that lets users see Milestones for their babies accomplishments. ## 		I used Expo Cli to setup and run the app, i used both Nativewind(Tailwind css) and 
internal css for the styling.						### The App has 4 screens ; Homescreen, AddScreen, EditScreen and EditingScreen in which all the various functionalities where set.
===>THE HOMESCREEN: its the landing page for the app , when users open the app they are greeted with a text that welcomes them and direct them to the AddScreen to start adding milestones
===>THE AddScreen: its the screen responsible for creating the milestone data , it asks for the milestone type ,the date of the event and additional notes that the user wants to see
===> THE EditScreen : the Inputed Milestones are Listed here and each sepererate milestones can be selected for editing which is done on the edit screen
===> THE EditingScreen: this screen is for editing milestones.

==========> MILESTONES LOGIC: the milestones are rendered using a js libary react native timeline flatlist, which takes in data gotten from the Add screen and use it to render the Milestones<====
=====> State Storage Mechanism: the  added and used dat by the users were was made possible using redux ,all the data needed for the milestone was stored n the key reducer<=========
=====> Logic for the date selected by the users was done by using a js libary <=====

