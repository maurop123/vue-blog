### Install

- npm i
- npm run local
- Go to http://localhost:8000

## Firebase setup

### Security

- Go to Authentication tab and click Add User. Add your email and password for your admin user.
- Copy your uid. Let's say it's abc123 for the next step.
- Go to Database -> Rules and paste this...
```
  {
    "rules": {
      "posts": {
        ".read": true,
        ".write": "auth.uid === 'abc123'"
      }
    }
  }
```
