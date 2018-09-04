import React, { Component } from "react";
import AnimationsWrapper from "../base-ui/AnimationWrapper";

class How extends Component {
  render() {
    return (
      <div className="container has-text-centered">
        <AnimationsWrapper>
          <div className="columns">
            <div className="column is-8 is-offset-2 has-text-left">
              <h1 className="title top35">What is a paper wallet?</h1>
              <p>
                One of the most exciting things you can do with your Sauco is to
                send them to a piece of paper.
              </p>
              <p>
                First of all, the first rule of crypto-club is: Your keys — Your
                Sauco, Not your keys — Not your Sauco.
              </p>
              <p>
                In the most specific sense, a Sauco paper wallet is a document
                containing all of the data necessary to access a the wallet from
                Sauco Nano.
                <br />
              </p>
              <h2 className="title top35">
                What are the benifits of having a paper wallet?
              </h2>
              <p>
                A paper wallet can be generated offline and allows you to have a
                copy of your copy literally on a piece of paper
              </p>
              <h2 className="title top35">
                What can I do with a paper wallet?
              </h2>
              <p>
                With a Sauco paper wallet you can store you Sauco passphrase away
                of a computer. If the paper wallet is stored properly then this
                might be considered an extra layer of security in storing your
                passphrase
              </p>
              <p>
                Another use case of a paper wallet is to gift it to friends for
                example for Christmas. Let&apos;s say you want to give 10 Sauco
                to John, but John doesn&apos;t know how to create a Sauco wallet.
                You could create a Sauco Paper Wallet for John, send some Sauco to
                the generated address and then gift the paper wallet to him.
              </p>
              <h2 className="title top35">
                Is this application communicating with any server?
              </h2>
              <p>
                No, cash.sauco.io is running only in your browser. This means
                that when you visit cash.sauco.io you are downloading the
                application in your browser and is running it locally. No data
                is transmitted to any server and there is no tracking/analytics
                software in place. In order to verify this, you can analyze on{" "}
                <a
                  href="https://github.com/Sauco-Apps/sauco-cash"
                  className="underlined"
                >
                  {" "}Github{" "}
                </a>{" "}
                the source code. In order to avoid any doubts, downloading the
                software from Github and running it offline is encouraged.
              </p>
              
            </div>
          </div>
        </AnimationsWrapper>
      </div>
    );
  }
}

export default How;
