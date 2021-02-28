import React, { FC } from 'react'

import * as S from './SocialNetworks.styled'

import { ReactComponent as Inst } from '../../assets/icons/social/inst.svg'
import { ReactComponent as Facebook } from '../../assets/icons/social/facebook.svg'
import { ReactComponent as Twitter } from '../../assets/icons/social/twitter.svg'
import { ReactComponent as GooglePlus } from '../../assets/icons/social/google-plus.svg'
import { ReactComponent as Yandex } from '../../assets/icons/social/yandex.svg'
import { ReactComponent as MSN } from '../../assets/icons/social/msn.svg'
import { ReactComponent as Vk } from '../../assets/icons/social/vk.svg'
import { ReactComponent as Ok } from '../../assets/icons/social/ok.svg'
import { ReactComponent as MailRU } from '../../assets/icons/social/mail-ru.svg'

type TLabelNetwork =
  | 'facebook'
  | 'google+'
  | 'instagram'
  | 'mailru'
  | 'msn'
  | 'odnoklassniki'
  | 'twitter'
  | 'vkontakte'
  | 'yandex'

interface INetwork {
  label: TLabelNetwork
  icon: JSX.Element
}

interface ISocialNetworksProps {
  onNetworkClick: (label: TLabelNetwork) => void
}

export const SocialNetworks: FC<ISocialNetworksProps> = ({ onNetworkClick }) => {
  const networks: INetwork[] = [
    { label: 'facebook', icon: <Facebook /> },
    { label: 'google+', icon: <GooglePlus /> },
    { label: 'instagram', icon: <Inst /> },
    { label: 'mailru', icon: <MailRU /> },
    { label: 'msn', icon: <MSN /> },
    { label: 'odnoklassniki', icon: <Ok /> },
    { label: 'twitter', icon: <Twitter /> },
    { label: 'vkontakte', icon: <Vk /> },
    { label: 'yandex', icon: <Yandex /> }
  ]

  const networkList = networks.map(({ label, icon }) => (
    <li key={label}>
      <button
        onClick={() => {
          onNetworkClick(label)
        }}
      >
        {icon}
      </button>
    </li>
  ))

  return <S.SocialNetworks>{networkList}</S.SocialNetworks>
}
