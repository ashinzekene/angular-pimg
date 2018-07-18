# AngularPimg


## [Try out a demo](https://ashinzekene.github.io/angular-pimg)

![Angular](https://angular.io/assets/images/logos/angular/angular.png)
![Pimg](https://ooade.gitbooks.io/pimg/logo.svg)

Angular Pimg is a progressive image loader component for Angular applications. It was heavily inspired by [PIMG](https://github.com/ooade/pimg) which is available for React, Vue and Preact.
Like [PIMG](https://github.com/ooade/pimg), it comes in-built with support for Cloudinary Images.

## Installation

```sh
npm install angular-pimg
```

## Usage
To use the component, import the module into your `app.module.ts` or your preferred module like so:

```ts
import { NgModule } from '@angular/core';
import { AngularPimgModule } from 'angular-pimg';

const pimgOptions = {
  fetchOnDemand: true,
  className: 'img',
  dataSaver: { wrapperClassName: 'wrapper', buttonClassName: 'my-btn' }
}

@NgModule({
  imports: [
    AngularPimgModule.forRoot(pimgOptions)
  ]
})

```

## Implementing
You can then use the component like so:

```html
<angular-pimg
[fetchOnDemand]='true'
[placeholder]='"placeholderurl.com/path/to/placeholder"'
[src]="images.com/path/to/image"
>
</angular-pimg>
```

## Options

### Available Pimg Options

__NOTE:__  Component options have a higher precedence than global options

### Default Options
|Option                     |Description                                            | Type         |Default ( Required )
----------------------------|-------------------------------------------------------|--------------|---------------
| `fetchOnDemand`           | allows image to load once it is visible on screen     | boolean      | true
| `placeholderClassName`    | the class Name for the placeholder image              | string       | pimg__placeholder
| `dataSaver`               | styles to be added to the image element               | false        \| { wrapperClassName: string, buttonClassName: string }     | false
| `className`               | the classname to be added to the image element        | string       | -

### Component Options
|Option                     |Description                                            | Type        |Default ( Required )
----------------------------|------------------------------------------------------|---------------|---------------
| `src`                     | image source                                          | string       | - (true)
| `placeholder`             | image source to preload before real image is fetched  | string       | -*
| `fetchOnDemand`           | allows image to load once it is visible on screen     | boolean      | -
| `placeholderClassName`    | the classname for the placeholder image              | boolean      | -
| `style`                   | styles to be added to the image element               | NgStyles     | -
| `className`               | the classname to be added to the image element        | string       | -
| `dataSaver`               | styles to be added to the image element               | false        \| { wrapperClassName: string, buttonClassName: string }     | false

__*__ Placeholder images are automatically generated for cloudinary images

## Contributions and Open Source stuff
This is an open souce project, feel free to submit isses, and pull requests. Don't forget to star my repo too. Thanks.
Looking for me on Twittter? I am [@ashinzekene](https://twitter.com/ashinzekene)!

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
