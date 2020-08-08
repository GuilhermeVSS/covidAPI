# 😷 covidAPI

</br>

## About
The covidAPI filters data from brasil.io based on a specified time frame and state. With the filtered data, calculate the top ten cities with the biggest percentage increase in the number of cases, in proportion to the estimated population in each city in 2019
    
</br>

## Get started

* In case you  don't have a nodeJS and yarn installed: [Node](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/)

1 - To test, just install the dependencies with  ``` yarn install ```

2 - Now run ``` yarn server ```

3 - Ready to use!

</br>

## How to use

The covidAPI expect to receive a GET request following the format:

```http://exampleURL/covid/?state=SS&dateStart=YYYY-MM-DD&dateEnd=YYYY-MM-DD```

Example:



```
state: PR,that corresponds to 'Paraná'.
dateStart : 2020-02-10, corresponds to 10/05/2020
dateEnd : 2020-06-10, corresponds to 10/06/2020

```

```http://exampleURL/covid/?state=PR&dateStart=2020-05-10&dateEnd=2020-06-10```

</br>

## Dependencies

Dependence       | Purpose
---------------- | -------------------------
express          |  To built an API 
axios            |  To do request in external API's
body-parser      |  To manipulate HTTP requests

</br>

## Link
Here is the link to covidAPI online:

[covidAPI](https://limitless-chamber-90378.herokuapp.com/)

``` ```
## Author
*Guilherme Ventura Santos Silva [GVSS]*

[![Twitter Badge](https://img.shields.io/badge/-@gventura_ss-6633cc?style=flat-square&labelColor=000000&logo=twitter&logoColor=white&link=https://twitter.com/gventura_ss)](https://twitter.com/gventura_ss) [![Linkedin Badge](https://img.shields.io/badge/-Guilherme%20Ventura-6633cc?style=flat-square&logo=Linkedin&logoColor=black&link=https://www.linkedin.com/in/guilherme-ventura-703612150/)](https://www.linkedin.com/in/guilherme-ventura-703612150/) [![Gmail Badge](https://img.shields.io/badge/-gvssilva@dcomp.ufs.br-6633cc?style=flat-square&logo=Gmail&logoColor=black&link=mailto:gvssilva@dcomp.ufs.br)](mailto:gvssilva@dcomp.ufs.br)

## License 

MIT License

Copyright (c) 2020 Guilherme Ventura Santos Silva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.