Jitterz Coffee House
========================
<a href="https://platform.telerik.com/#appbuilder/clone/https%3A%2F%2Fgithub.com%2FIcenium%2FSample-JiterzCoffeehouse" target="_blank"><img src="http://docs.telerik.com/platform/samples/images/try-in-appbuilder.png" alt="Try in AppBuilder" title="Try in AppBuilder" /></a>  <a href="https://github.com/Icenium/Sample-JiterzCoffeehouse" target="_blank"><img style="padding-left:20px" src="http://docs.telerik.com/platform/samples/images/get-github.png" alt="Get from GitHub" title="Get from GitHub"></a>

<a id="top"></a>
* [Overview](#overview)
* [Showcased APIs](#showcased-apis)
* [Screenshots](#screenshots)
* [Test the Sample](#test-the-sample)

# Overview

This sample app is a coffee house app for regular customers, developed with Apache Cordova, Kendo UI and Google Maps API. This app assumes that you're already logged in, lets you check your newsfeed and manage your cards and rewards. You can also look for coffee stores near you. 

> *Supported mobile platforms:* iOS, Android, Windows Phone
>
> *Developed with:* Apache Cordova 3.7.0, Kendo UI Mobile v2013.3.1517, Google Maps API

[Back to Top](#top)

# Showcased APIs

This sample shows how to use the following widgets and features of Kendo UI Mobile.

* **[Kendo MVVM][Kendo MVVM]:** Model View ViewModel (MVVM) is a design pattern which helps developers separate the Model (the data) from the View (the UI). The View-Model part of MVVM is responsible for exposing the data objects from the Model in such a way that those objects are easily consumed in the View.
* **[Application][Application]:** The widget provides the necessary tools for building native-looking web based mobile applications.
* **[ActionSheet][ActionSheet]:** The widget displays a list of choices related to a task initiated by the user.
* **[BackButton][BackButton]:** The widget lets you navigate to the last visited view.
* **[Button][Button]:** The widget navigates to a mobile View or executes a custom callback when tapped.
* **[ButtonGroup][ButtonGroup]:** The widget provides a linear set of grouped buttons.
* **[Layout][Layout]:** The widget lets you share headers and footers between views.
* **[View][View]:** The widget represents a screen in the Kendo mobile Application.
* **[ListView][ListView]:** The widget displays flat or grouped list of items.
* **[Tabstrip][Tabstrip]:** The widget displays an application-wide group of navigation buttons. The look of the mobile TabStrip changes depending on the user mobile device and operating system.
* **[NavBar][NavBar]:** The widget displays an application navigation bar. The mobile NavBar may display the current view title in the center, and optionally some additional left and right aligned widgets (a back button, settings button, etc.).
* **[ObservableObject][ObservableObject]:** The kendo.data.ObservableObject is the building block of Kendo MVVM.
* **[Templates][Templates]:** The Kendo templates provide a simple to use, high-performance JavaScript templating engine to let you create HTML chunks that can be automatically merged with JavaScript data.

This sample shows how to use the following Apache Cordova APIs and core plugins.

* **[Splashscreen][Splashscreen]:** The plugin lets you show or hide the splashscreen programmatically.
* **[Geolocation][Geolocation]:** The plugin provides information about the location of the device.
* **[LocalStorage][LocalStorage]:** This API provides synchronous key/value pair storage.

This sample shows how to use the **[Google Maps JavaScript API][Google Maps JavaScript API]**.

[Back to Top](#top)

# ScreenShots

### iOS

Home | Cards | Select Card | Select Card - Back | Add Card
---|---|---|---|---
![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/home.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/cards.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/card-info.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/card-info-back.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/card-add.png)

Rewards | Select Reward | Select Reward - Back | Stores (Map) | Stores (List)
---|---|---|---|---
![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/rewards.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/reward-info.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/reward-info-back.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/stores-map.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/ios/stores-list.png)

### Android

Home | Cards | Select Card | Select Card - Back | Add Card
---|---|---|---|---
![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/home.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/cards.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/card-info.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/card-info-back.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/card-add.png)

Rewards | Select Reward | Select Reward - Back | Stores (Map) | Stores (List)
---|---|---|---|---
![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/rewards.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/reward-info.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/reward-info-back.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/stores-map.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/android/stores-list.png)

### Windows Phone

Home | Cards | Select Card | Select Card - Back | Add Card
---|---|---|---|---
![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/home.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/cards.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/card-info.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/card-info-back.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/card-add.png)

Rewards | Select Reward | Select Reward - Back | Stores (Map) | Stores (List)
---|---|---|---|---
![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/rewards.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/reward-info.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/reward-info-back.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/stores-map.png) | ![](https://raw.githubusercontent.com/Icenium/Sample-JiterzCoffeehouse/master/screenshots/wp/stores-list.png)

[Back to Top](#top)

# Test the Sample

Apart from exploring the sample code base in GitHub, you can also clone and run the sample in your preferred AppBuilder client.

## In-Browser

With the AppBuilder in-browser client, you can develop hybrid and NativeScript cross-platform mobile apps from your browser. You can use the in-browser client at [https://platform.telerik.com](https://platform.telerik.com).

### Clone the sample

1. Click **Try in AppBuilder** above.
1. Provide your login credentials, if prompted.

### Run the sample

1. [Run in the device simulator.][device simulator]
1. [Run in the companion app.][companion]
1. [Deploy on device via QR code.][QR code]

[Back to Top](#top)

## Windows

With the AppBuilder Windows client, you can develop hybrid and NativeScript cross-platform mobile apps from your Windows desktop. You can download and install the Windows client from [http://www.telerik.com/appbuilder/windows-client](http://www.telerik.com/appbuilder/windows-client).

### Clone the sample

1. Verify that the AppBuilder Windows client is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. In the dashboard, click **Samples** and select **Hybrid**.
1. From the **Workspace** drop-down menu, select the workspace in which you want to develop your application.
1. Select **Demos**.
1. Select **Jiterzcoffeehouse**.
1. (Optional) Rename the project.
1. Click **Clone**.

### Run the sample

With the AppBuilder Windows client, you can quickly test your apps on device, in the simulator or in the native emulators.

1. [Run in the device simulator.][device simulator]
1. [Run in the companion app.][companion]
1. [Run in the native emulators.][emulators]
1. [Deploy on device via QR code.][QR code]
1. [Deploy via cable connection.][USB deploy]

[Back to Top](#top)

## Visual Studio

With the AppBuilder extension for Visual Studio, you can develop hybrid and NativeScript cross-platform mobile apps from Microsoft Visual Studio. You can download and install the extension from [http://www.telerik.com/appbuilder/visual-studio-extension](http://www.telerik.com/appbuilder/visual-studio-extension).

### Clone the sample

1. Verify that the AppBuilder extension for Visual Studio is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. Select **AppBuilder** &#8594; **Get Sample**.
1. Select **Hybrid**.
1. Select **Demos**.
1. Select **Jiterzcoffeehouse**.
1. (Optional) Rename the project.
1. Click **Get**.

The extension for Visual Studio copies the sample files locally. The extension creates a new solution and project and loads them.

### Run the sample

With the AppBuilder extension for Visual Studio, you can quickly test your apps on device, in the simulator or in the native emulators.

1. [Run in the device simulator.][device simulator]
1. [Run in the companion app.][companion]
1. [Run in the native emulators.][emulators]
1. [Deploy on device via QR code.][QR code]
1. [Deploy via cable connection.][USB deploy]

[Back to Top](#top)

## CLI

With the AppBuilder command-line interface, you can develop hybrid and NativeScript cross-platform mobile apps from the command line. You can learn how to add the AppBuilder commands to your command line from [http://www.telerik.com/appbuilder/command-line-interface](http://www.telerik.com/appbuilder/command-line-interface).

### Clone the sample

1. Verify that a command prompt is running and you are logged in the Telerik Platform in the account in which you want to develop your application.
1. To list the available samples, run the following command.

	```bash
	appbuilder sample
	```
1. Run the clone command for the sample as listed by `appbuilder sample`.
	
	```bash
	appbuilder sample clone JiterzCoffeehouse
	```

The AppBuilder command-line interface shows the following message: `Successfully initialized project in the folder!`

### Run the sample

With the AppBuilder command-line interface, you can quickly test your apps on device, in the simulator or in the native emulators.

1. [Run in the device simulator.][device simulator]
1. [Run in the companion app.][companion]
1. [Run in the native emulators.][emulators]
1. [Deploy on device via QR code.][QR code]
1. [Deploy via cable connection.][USB deploy]

[Back to Top](#top)

[device simulator]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-apps-in-simulator/launch-simulator
[companion]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/run-companion/using-appbuilder-companion-app
[QR code]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/deploy-remote
[USB deploy]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-on-devices/running-on-connected-devices/deploy-connected
[emulators]: http://docs.telerik.com/platform/appbuilder/testing-your-app/running-in-emulators/native-emulators
[Kendo MVVM]: http://docs.telerik.com/kendo-ui/framework/mvvm/overview
[Application]: http://docs.telerik.com/kendo-ui/mobile/application
[View]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/view
[Tabstrip]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/tabstrip
[NavBar]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/navbar
[Button]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/button
[ListView]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/listview
[ObservableObject]: http://docs.telerik.com/kendo-ui/api/javascript/data/observableobject
[Geolocation]: https://www.npmjs.com/package/cordova-plugin-geolocation
[ActionSheet]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/actionsheet
[BackButton]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/backbutton
[Templates]: http://docs.telerik.com/kendo-ui/framework/templates/overview
[Splashscreen]: http://plugins.cordova.io/#/package/org.apache.cordova.splashscreen
[Geolocation]: http://plugins.cordova.io/#/package/org.apache.cordova.geolocation
[LocalStorage]: http://cordova.apache.org/docs/en/4.0.0/cordova/storage/storage.html#link-1#Storage
[ButtonGroup]: http://docs.telerik.com/KENDO-UI/api/javascript/mobile/ui/buttongroup
[Layout]: http://docs.telerik.com/kendo-ui/api/javascript/mobile/ui/layout