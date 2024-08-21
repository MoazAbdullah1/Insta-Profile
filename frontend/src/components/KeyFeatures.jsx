import { FaInstagram } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { FaDownload } from "react-icons/fa";

export default function KeyFeatures() {
  return (
    <div className="flex gap-6 mx-20 mt-16">
      <div className="bg-gray-700 text-center p-6 rounded-lg flex flex-col items-center">
        <FaInstagram className="text-5xl mb-4" />
        <h1 className="font-bold text-lg my-7">No Need Account For Private Insta Stalker</h1>
        <p className="text-gray-100">
          Company is a free online tool that enables you to view and download Insta stories without the knowledge of the author and no Instagram limitation. You do not need to log in or install any third-party software/extension. Our private Insta stalker app makes us completely in incognito mode. So you are watching anyone&apos;s Instagram stories, photos, reels video, followers, likes, comments and status anonymously.
        </p>
      </div>
      <div className="bg-gray-700 text-center p-6 rounded-lg flex flex-col items-center">
        <GoQuestion className="text-5xl mb-4" />
        <h1 className="font-bold text-lg my-7">Company Supports All Devices & OS</h1>
        <p className="text-gray-100">
          You can do anything and keep an eye on anyone. We do not save any story or file on our servers. Our Company makes your presence invisible to the account owners. It means that you are 100% anonymous, no matter what OS (iOS/Android or Window/MAC) or device (computer/smartphone/tablet) that you are using.
        </p>
      </div>
      <div className="bg-gray-700 text-center p-6 rounded-lg flex flex-col items-center">
        <FaDownload className="text-5xl mb-4" />
        <h1 className="font-bold text-lg my-7">Fast and Secure Stories Downloader</h1>
        <p className="text-gray-100">
          Instagram story downloader like picuki app provided on Company.com is fast and totally free. Our tools provide downloads in original/source quality. As Insta stories are temporary and usually disappear within 24 hours, it is up to you if you want to save on your device for watching later or using for online marketing strategy. Just type the Insta username, you can download all active stories, posts, photos privately and quickly.
        </p>
      </div>
    </div>
  );
}
