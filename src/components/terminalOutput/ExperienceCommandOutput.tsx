import React from 'react';
import { TerminalLineOutput } from '../terminal/TerminalLine.styles';
import { Link } from './TerminalOutput.styles';

interface IExperienceCommandOutput {
  showAll: boolean;
}

function ExperienceCommandOutput(props: IExperienceCommandOutput) {
  return (
    <TerminalLineOutput>
      <ul>
        <li>
          <b>
            <i>
              <Link href="https://www.noblypos.com" target="_blank">
                Nobly POS{' '}
              </Link>{' '}
              (March 2018 - Present)
            </i>
          </b>
          {props.showAll && (
            <div>
              Nobly is a UK-based company that provides a whole suite of products around its point
              of sale, inventory management, and CRM platform. Based on an iPad-based POS and a back
              office web application, it offers +20 complex sales and finance reports, inventory
              tracking, payment integrations, among others, offering a complete solution for coffee
              shops, restaurants, and retail stores all over the world. <br />
              In Nobly I work as a Full Stack Engineer in charge of the design and development of
              the Nobly suite of products:
              <ul>
                <li>
                  <i>Nobly Core Server</i>, built with a Node.js microservices architecture and
                  MongoDB
                </li>
                <li>
                  <i>Nobly Back Office</i> web app for store management, dashboard, reports,
                  inventory tracking, third-party apps integration. Built with React and Node.
                </li>
                <li>
                  <i>Nobly GO</i>, mobile app that provides access to the main Nobly reports. Built
                  with React Native (Android and iOS).
                </li>
                <li>
                  <i>Nobly Delivery</i>, a complete delivery solution for restaurants and shops
                  built with React Native (Android and iOS), Node and Mongo DB
                </li>
                <li>
                  <i>Nobly KDS (Kitchen Display System) </i> tablet app built with React Native to
                  display real-time orders on the restaurant's kitchens.
                </li>
              </ul>
            </div>
          )}
        </li>
        <li>
          <b>
            <i>
              <Link href="https://www.octobot.io" target="_blank">
                Octobot
              </Link>{' '}
              (February 2016 - March 2018)
            </i>
          </b>
          {props.showAll && (
            <div>
              Octobot is an Uruguayan-based software factory specialized in web and mobile
              development. <br />
              During my journey in Octobot I have been involved in several projects for many
              US-based startups and companies, developing web applications with Python-Django,
              Node.js, React, Postgres SQL and Mongo DB.
            </div>
          )}
        </li>
        <li>
          <b>
            <i>
              <Link href="https://www.saico.com.uy" target="_blank">
                SAICO Sistemas
              </Link>{' '}
              (July 2013 - February 2016)
            </i>
          </b>
          {props.showAll && (
            <div>
              SAICO Sistemas is a software development company specialized in business
              administration software, such as accounting, human resources, sales, among others.
              <br />
              During my 3 years on SAICO, I worked as a Java developer as well as a SysAdmin in
              charge of the administration of networks and infrastructure of Linux and Windows
              servers.
            </div>
          )}
        </li>
      </ul>
    </TerminalLineOutput>
  );
}

export default ExperienceCommandOutput;
