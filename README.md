# The CSES Server

Homepage and inner-workings of [cses.ucsd.edu](https://cses.ucsd.edu).

## Set Up and Running

- Install NodeJs.
- Run the following
```shell
npm install @angular/cli -g
npm install typescript -g
```
- From the root directory of this repo, run
```shell
npm i
cd server
tsc
cd ..
ng build
npm run serve
```
- Navigate your browser to localhost:8080

## Guides and Guidelines
- Code style is pretty lax; things must compile and should be reasonably
commented
- Know how Node.js works
- Know how Typescript works
- Know how Angular 2 works.
  - Guides for the above three bullet points are available through
  Google search; make sure to know what you are doing

### Production
```
ssh cses@cses.ucsd.edu
su root
cd /var/www/html/nodejs/
git pull
[run the compilation commands listed in the "set up and running" section]
pm2 restart server
```

- If there are issues in compilation, you will need to know how pm2 operates
- We run Apache2, so know how to perform configuration under the sites-enabled
directory
- We run a Debian based server, so know how to configure networking on a Linux
system
- If you need access to the physical machine, email mbland@ucsd.edu for keycard
access

## Testing

Due to the scale of this project, we adopt a lax testing structure. CircleCI has
yet to be integrated, but once it is we will require checks to pass for all pull
requests. Otherwise, you are not required to unit test your code; code review
is required.

## Further help

For any other questions/concerns, submit an issue to this repo or email
mbland@ucsd.edu.
