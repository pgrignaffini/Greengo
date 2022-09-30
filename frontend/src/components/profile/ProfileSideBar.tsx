import { BellIcon, BookmarkIcon, PlusCircleIcon, UserCircleIcon, MailIcon } from '@heroicons/react/outline'
import ProfileSidebarRow from './ProfileSidebarRow';

function ProfileSidebar({ setSelectedTab }: { setSelectedTab: any }) {

    return (
        <div className='flex flex-col col-span-2 items-center mt-5 px-4 md:items-start'>
            <ProfileSidebarRow Icon={UserCircleIcon} title="Profile" onClick={() => setSelectedTab("profile")} />
            <ProfileSidebarRow Icon={BellIcon} title="Notifications" />
            <ProfileSidebarRow Icon={MailIcon} title="Messages" />
            <ProfileSidebarRow Icon={BookmarkIcon} title="Favorites" />
            <ProfileSidebarRow Icon={PlusCircleIcon} title="Create project" onClick={() => setSelectedTab("create-project")} />
        </div>
    )
}

export default ProfileSidebar