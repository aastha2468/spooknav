<img src  = "https://github.com/aastha2468/spooknav/blob/main/images/spooknav.png">

# spookynav
Need help to figure what is the safest way 
to navigate through the streets during 
Halloween night? No need to worry! spookynav is here to 
help and guide the way!  

## Background and Goals for Our Project
Over the past 7 months, we have felt further than ever from our family and neighbors, and we have survived covid-19 lockdowns without thriving. We have seen our younger siblings losing out on childhood experiences like summer camp and school as safety concerns in the community rose. In creating spooknav, we wanted to consider ways to help communities connect again with socially distancing, and visualize ways to alleviate parents’ safety anxieties. We hope that our web app will allow kids to be kids again on Halloween by combining safety data into one comprehensive map of how to stay safe. 

### spookynav combines safety datasets for Baltimore, Maryland, to give parents one easy to read, comprehensive, and visually clear map of locations’ safety, based on comprehensive existing datasets of sex offenders, gun convictions, and existing CCTV cameras.

Living in big cities growing up, we ourselves had many Halloween nights limited or cut short as it got too dark to be sure of safety in our neighborhoods. Spookynav allows families to plan ahead to check that their routes are safe.

## Technologies Utilized
- JavaScript
- HTML
- CSS
- Mapbox API
- IntelliJ IDEA
- BootStrap
- Github
- Java
- Canva
- ProCreate

## Categories
- Best Hack for Stronger Communities
- Best Data Visualization Tool
- Most Creative Data Hack

## How it works

spookynav is a web application using the MapBox API. Using spooknav, parents can explore a customized map of the Baltimore area. On the map, they can click on ghost icons to see statistics about sex offenders, gun convictions, and CCTV camera presence in different areas.

To build this safety map, we examined three datasets, a dataset of sex offenders (https://www.dpscs.state.md.us/onlineservs/sor/sor_listings/pdf_name.pdf), a dataset of gun convictions (https://data.baltimorecity.gov/Public-Safety/Gun-Offenders/aivj-4x23), and a dataset of CCTV cameras in the Baltimore area (https://data.baltimorecity.gov/Public-Safety/CCTV-Locations-Obsolete/hdyb-27ak). We preprocessed, cleaned, and read the data, and for the gun and CCTV data, we were able to pull latitude and longitude coordinates. For the sex offender data, we used a MapQuest key to geocode the string addresses into latitude and longitude.

With that data, we created hashmaps tracking number of sex offenders, gun offenders, and cameras up to the third decimal of latitude and longitude (about every 5 minutes walking). We created a comprehensive dataset of latitude and longitudes and their corresponding sex offender, gun offender, and CCTV counts. We also included all latitudes and longitudes in the Baltimore area that didn’t include any data points, or coordinates that were “safe” areas. 

From there, we were able to drop pins on the map to allow users to visualize all three datasets in a one-stop shop, and assess the trick-or-treating safety of any area in Baltimore.

## Implementation Difficulties
Previous to the hackathon, none of us had built a map web app before, and two of us had never built any sort of webapp or coded in HTML or CSS before. We entered the project pretty blind to how to make it work, simply because we really believed in the idea. We spent a lot of time researching the Mapbox API, researching how to set up a webapp project, and considering how to incorporate the html and css files. We also struggled a lot with the data. The dataset concerning sex offenders was a PDF, which we had a very hard time translating to a readable format, and it additionally listed offenders by address instead of latitude and longitude. This posed a serious issue in translating that dataset to points in the Mapbox API. We also struggled to set up hosting, because that was another blind spot in our coding experience

## Concerns/Questions
We spent a lot of time considering what was ethical to include in our safety ratings. We elected not to include the addresses of sex offenders or gun offenders, and generalize it to areas on the map. Although this information is already available online, we didn’t want our app to be used for any purpose other than children’s safety, and so we felt conflicted about including people’s personal information in the platform. We also considered using crime rates as a factor in the map, but crime rates can be far more reflective of the judicial system’s prejudice against minorities than actual crime. Since crime rates can historically be more indicative of areas with large populations of marginalized communities being targeted by law enforcement, we chose to try to rely only on datasets which were directly related to safety of an area. For example, we believed that parents would feel more at ease knowing they were not trick or treating at homes of sex offenders. 

## Next steps
We thought a good next step for the platform would be integrating a method for users to submit covid-19 safety of certain streets, and incorporating coronavirus safety into our safety metrics on the platform. This would involve setting up a user submission system, and a system for storing user data and updating existing safety statistics with the new covid information. This might involve data storage on a system like Firebase.

## Contributors
Mira Tellegen, Aastha Senjalia, Ashley Freels, and Andrea Tongsak

