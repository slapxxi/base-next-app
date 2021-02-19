import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BearIcon, BearIconProps } from '../components/icons/BearIcon';
import { DeliveryIcon, DeliveryIconProps } from '../components/icons/DeliveryIcon';
import { MessageIcon, MessageIconProps } from '../components/icons/MessageIcon';
import { VkIcon, VkIconProps } from '../components/icons/VkIcon';
import { WalletIcon, WalletIconProps } from '../components/icons/WalletIcon';
import { WhatsappIcon, WhatsappIconProps } from '../components/icons/WhatsappIcon';

export const Vkontakte: Story<VkIconProps> = (args) => <VkIcon></VkIcon>;

Vkontakte.args = {};

export const Whatsapp: Story<WhatsappIconProps> = (args) => <WhatsappIcon></WhatsappIcon>;

Whatsapp.args = {};

export const Wallet: Story<WalletIconProps> = (args) => <WalletIcon></WalletIcon>;

Wallet.args = {};

export const Message: Story<MessageIconProps> = (args) => <MessageIcon></MessageIcon>;

Message.args = {};

export const Delivery: Story<DeliveryIconProps> = (args) => <DeliveryIcon></DeliveryIcon>;

Delivery.args = {};

export const Bear: Story<BearIconProps> = (args) => <BearIcon></BearIcon>;

Bear.args = {};

export default {
  title: 'Icons',
};
