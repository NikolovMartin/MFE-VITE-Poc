# MFE-VITE-Poc

Microfrontend PoC (Vite) V2
This repository explores how to implement microfrontends using Vite and vite-plugin-federation.

It's related to the other PoC about Vite Microfrontends found here.

Prerequisites
Install `yarn`.

### Run yarn in these folders:

- host
- remote

### Running the PoC

In remote, run
- `yarn build` in one terminal
- `yarn preview` in a second terminal

In host, run
- `yarn start` in a third terminal (starts development mode)

Open `http://localhost:3000` in a browser
Observations

Change something in `App.tsx` of remote. Note that no hot module reloading (HMR) occurs but if you refresh the browser you do see the changes.
Note that remote uses a hook (useState) without crashing.
Change something in `App.tsx` of host and notice that HMR is working.
Open another terminal and run yarn start. Notice that remote opens without being wrapped inside host and that HMR works.
