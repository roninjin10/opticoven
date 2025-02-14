import { IconInfo, IconYoutube, IconTelegram, IconInstagram, IconGithub, IconTwitter } from "../icons"

// === ADD CONFIG ===
export const LOGO = "/static/images/logo.svg"
export const LOGO_NAME = "opticoven"
export const LOGO_WIDTH = "42px"
// to change app colors go to theme.ts

export const APP_TITLE = "opticoven"
export const APP_DESCRIPTION =
  "Show your support for cheaper gas fees and scalable Ethereum! Connect your wallet and select a witch from your coven!  Mint on Optimism for under a dollar!"

export const APP_LINKS = [
  { href: "https://www.cryptocoven.xyz/", title: "Crypto Coven", icon: <IconInfo /> },
  { href: "https://app.optimism.io/", title: "Bridge ETH To Optimism", icon: <IconInfo /> },
]

export const TWITTER_SHARING_URL =
  "https://twitter.com/intent/tweet?text=Layer%202%20is%20coming.%20Be%20ready%20for%20scaling%20through%20%23Optimism!&url=https%3A%2F%2Fimoptimistic.xyz&hashtags=Ethereum,Rollup,Layer2"

export const DISCLAIMER =
  "stakefish & f2pool take privacy very seriously. The “OPTIMISM MASK” app is provided for fun and convenience. We never store photos, and do not transmit any data besides an anonymous identifier containing no personal information. We have also made the source code available in the event you would like to review it."

export const POWERED_BY = [
  { href: "https://stake.fish/", title: "stakefish" },
  { href: "https://www.f2pool.com/", title: "f2pool" },
]

export const SOCIAL_LINKS = [
  { href: "https://t.me/stakefish", title: "Telegram", icon: <IconTelegram /> },
  { href: "https://instagram.com/stakedotfish", title: "Instagram", icon: <IconInstagram /> },
  {
    type: "dropdown",
    icon: <IconTwitter />,
    data: [
      { name: "f2pool", url: "https://twitter.com/f2pool_official" },
      { name: "stakefish", url: "https://twitter.com/stakefish" },
    ],
  },
  { href: "https://github.com/stakefish/i-m-optimistic", title: "Github", icon: <IconGithub /> },
]

// === MASK CONFIG ===
export const FILE_NAME = "optimistic-mask.png" // name for downloaded image
export const MASK = "/static/images/stripe.svg"
export const DEFAULT_IMAGE = "/static/images/default.jpeg"
export const DEFAULT_COORDS = {
  x: 251,
  y: 234,
}
export const STAGE_WIDTH = 500
export const STAGE_HEIGHT = 520

export const SCALE_FACTOR = 2

export const CONTROLLER_ROTATION = -6
export const CONTROLLER_ROTATION_MIN = -180
export const CONTROLLER_ROTATION_MAX = 180

export const CONTROLLER_SIZE = 1
export const CONTROLLER_SIZE_MIN = 0
export const CONTROLLER_SIZE_MAX = 2
export const CONTROLLER_SIZE_STEP = 0.01

export const MASK_WIDTH = 208
export const MASK_HEIGHT = 55

export const ONE_RADIAN_IN_DEGREES = 180 / Math.PI
