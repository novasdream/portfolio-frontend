import { FC, memo } from 'react'
import { useSelector } from 'react-redux'

import {
  ButtonLink,
  GithubIcon,
  GoogleIcon,
  LinkedinIcon,
  StackOverflowIcon
} from '@/components'
import { profileSelector } from '@/store/slices/profileSlice'

export interface ISocialLinksProps {
  className?: string
}

export const SocialLinks: FC<ISocialLinksProps> = memo(
  ({ className }: ISocialLinksProps) => {
    const profile = useSelector(profileSelector)

    return (
      <div className={className}>
        {profile?.linkedin && (
          <ButtonLink isExternal isIcon target="_blank" href={profile.linkedin}>
            <LinkedinIcon className="transition duration-150 ease-in-out delay-100 transform hover:scale-125 fill-white hover:fill-[#f05423]" />
          </ButtonLink>
        )}

        {profile?.google && (
          <ButtonLink isExternal isIcon target="_blank" href={profile.google}>
            <GoogleIcon className="transition duration-150 ease-in-out delay-100 transform hover:scale-125 fill-white hover:fill-[#f05423]" />
          </ButtonLink>
        )}

        {profile?.github && (
          <ButtonLink isExternal isIcon target="_blank" href={profile.github}>
            <GithubIcon className="transition duration-150 ease-in-out delay-100 transform hover:scale-125 fill-white hover:fill-[#f05423]" />
          </ButtonLink>
        )}

        {profile?.stackoverflow && (
          <ButtonLink
            isExternal
            isIcon
            target="_blank"
            href={profile.stackoverflow}
          >
            <StackOverflowIcon className="transition duration-150 ease-in-out delay-100 transform hover:scale-125 fill-white hover:fill-[#f05423]" />
          </ButtonLink>
        )}
      </div>
    )
  }
)

SocialLinks.displayName = 'SocialLinks'

export default SocialLinks
