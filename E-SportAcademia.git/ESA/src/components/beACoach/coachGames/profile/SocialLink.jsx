import React from "react";
import { useState, useEffect } from "react";
import Socials from "../../Socials";
import styles from "../../../../styles/beACoach/profile/socialLink.module.css";

const SocialLink = ({
  setTwitch,
  setYoutube,
  setInstagram,
  setTwitterX,
  setTiktok,
  userDataLink,
  twitch,
  youtube,
  instagram,
  tikTok,
  twitterX,
}) => {
  function handleSocials(event) {
    if (event.name === "Twitch") {
      setTwitch(event.value);
    } else if (event.name === "Instagram") {
      setInstagram(event.value);
    } else if (event.name === "Youtube") {
      setYoutube(event.value);
    } else if (event.name === "TikTok") {
      setTiktok(event.value);
    } else if (event.name === "X") {
      setTwitterX(event.value);
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <h3>Links and socials</h3>
        </div>
        <div className={styles.socialsContainer}>
          <Socials
            name="Twitch"
            link="www.twitch.de"
            setInput={handleSocials}
            input={twitch}
          />
          <Socials
            name="Youtube"
            link="www.youtube.de"
            setInput={handleSocials}
            input={youtube}
          />
          <Socials
            name="Instagram"
            link="www.instagram.de"
            setInput={handleSocials}
            input={instagram}
          />
          <Socials
            name="TikTok"
            link="www.tiktok.de"
            setInput={handleSocials}
            input={tikTok}
          />
          <Socials
            name="X"
            link="www.twitter.com"
            setInput={handleSocials}
            input={twitterX}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialLink;
