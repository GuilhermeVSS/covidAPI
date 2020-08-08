# 😷 apiCovid

</br>

## About
The apiCovid filters data from brasil.io based on a specified time frame and state. With the filtered data, calculate the top ten cities with the biggest percentage increase in the number of cases, in proportion to the estimated population in each city in 2019
    
</br>

## Get started

* In case you  don't have a nodeJS and yarn installed: [Node](https://nodejs.org/en/), [Yarn](https://classic.yarnpkg.com/)

1 - To test, just install the dependencies with  ``` yarn install ```

2 - Now run ``` yarn server ```

3 - Ready to use!

</br>

## How to use 
The apiCovid expect to receive a GET request following the format:

```http://exampleURL/?state=SS&dateStart=YYYY-MM-DD&dateEnd=YYYY-MM-DD```

Example:

state: PR,that corresponds to 'Paraná'.
</br>
dateStart : 2020-02-10, corresponds to 10/05/2020
</br>
dateEnd : 2020-06-10, corresponds to 10/06/2020

```http://exampleURL/?state=PR&dateStart=2020-05-10&dateEnd=2020-06-10```
</br>

## Dependencies

Dependence       | Purpose
---------------- | -------------------------
express          |  To built an API 
axios            |  To do request in external API's
body-parser      |  To manipulate HTTP requests

</br>

## Author
*Guilherme Ventura Santos Silva [GVSS]*

[![Twitter Badge](https://img.shields.io/badge/-@gventura_ss-6633cc?style=flat-square&labelColor=000000&logo=twitter&logoColor=white&link=https://twitter.com/gventura_ss)](https://twitter.com/gventura_ss) [![Linkedin Badge](https://img.shields.io/badge/-Guilherme%20Ventura-6633cc?style=flat-square&logo=Linkedin&logoColor=black&link=https://www.linkedin.com/in/guilherme-ventura-703612150/)](https://www.linkedin.com/in/guilherme-ventura-703612150/) [![Gmail Badge](https://img.shields.io/badge/-gvssilva@dcomp.ufs.br-6633cc?style=flat-square&logo=Gmail&logoColor=black&link=mailto:gvssilva@dcomp.ufs.br)](mailto:gvssilva@dcomp.ufs.br)
