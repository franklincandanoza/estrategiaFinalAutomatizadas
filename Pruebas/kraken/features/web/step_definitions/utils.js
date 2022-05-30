function takeScreenshot(driver, file){
        return driver.takeScreenshot().then(image => fsp.writeFile(file, image, 'base64'));
    }
