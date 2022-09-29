import Link from "next/link"
import SearchBar from "./SearchBar"
import { useConnectModal, useAccountModal, useChainModal } from '@rainbow-me/rainbowkit'
import { useAccount, useNetwork } from 'wagmi'
import { signIn, signOut, useSession } from "next-auth/react";
import { UserCircleIcon, StarIcon, PhotographIcon } from '@heroicons/react/outline'
import makeBlockie from "ethereum-blockies-base64"
import ChangeTheme from "./ChangeTheme";

function Header() {

    const { openConnectModal } = useConnectModal();
    const { openAccountModal } = useAccountModal();
    const { openChainModal } = useChainModal();
    const { isConnected, address } = useAccount();
    const { chain } = useNetwork()
    const { data: session, status } = useSession();

    console.log("Connected to: ", chain)
    console.log(session)

    return (
        <header className="fixed top-0 right-0 left-0 p-7 z-50 max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
                <Link href={"/"}>
                    <a className="font-bold text-4xl text-primary font-pacifico">Greengo</a>
                </Link>
                <div className="hidden md:inline-flex">
                    <SearchBar placeholder="Search a project..." />
                </div>
                <div className="hidden xl:flex xl:space-x-7">
                    <Link href={"/collections"}>
                        <a className="text-primary font-montserrat text-xl">Creators</a>
                    </Link>
                    <Link href={"/"}>
                        <a className="text-primary font-montserrat text-xl">Projects</a>
                    </Link>
                    <Link href={"/"}>
                        <a className="text-primary font-montserrat text-xl">FAQ</a>
                    </Link>
                </div>
                <div>
                    <ChangeTheme />
                </div>
                {isConnected ?
                    (<>
                        <button className="btn btn-sm btn-outline btn-primary normal-case" onClick={openAccountModal}><p>Account</p></button>
                        <button className="btn btn-sm btn-outline btn-primary normal-case" onClick={openChainModal}><p>Chain</p></button>

                    </>)
                    :
                    (<button className="p-2 rounded-md bg-gradient-to-tr from-primary to-secondary shadow-md" onClick={openConnectModal}>
                        <p className="lg:inline font-poppins text-inherit">Connect wallet</p>
                    </button>)
                }
                {session &&
                    (<div className="flex space-x-2 items-center">
                        <button className="btn btn-sm btn-outline btn-primary normal-case" onClick={() => signOut()}>
                            <p>Sign Out</p>
                        </button>
                        <img src={session?.user?.image as string} className="peer rounded-full w-8 h-8 cursor-pointer" />
                    </div>)}
                {isConnected && !session &&
                    (<div className="flex space-x-2 items-center">
                        <button className="btn btn-sm btn-outline btn-primary ml-3 normal-case" onClick={() => signIn("discord")}>
                            Sign In
                        </button>
                        <img src={makeBlockie(address as string)} className="peer rounded-full w-8 h-8 cursor-pointer" />
                    </div>)
                }
            </div>
            <div className="divider" />
        </header>
    )
}

export default Header
