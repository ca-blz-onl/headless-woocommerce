import HTMLReactParser from 'html-react-parser';
import React from 'react';
import { filter } from 'lodash';

import { MegaMenu as MegaMenuType, TypesenseMenuItem } from '@src/lib/helpers/menu';
import {
  MegaMenuSubMenuColumn,
  MegaMenuSubMenuWrapper,
  MenuListItem,
} from '@src/components/blocks/maxmegamenu/styled-components';
import { MenuLink } from '@src/components/blocks/maxmegamenu/menu-link';
import type { MaxMegaMenuAttributes } from '@src/components/blocks/maxmegamenu/block';

import { cn } from '@src/lib/helpers/helper';
import { NormalMenu } from '@src/components/blocks/maxmegamenu/normal-menu';

type Props = {
  attributes: MaxMegaMenuAttributes;
  className?: string;
  items: TypesenseMenuItem[];
};

export const NormalSubMenu: React.FC<Props> = ({ items, attributes }) => {
  return (
    <MegaMenuSubMenuWrapper
      $mainNavigationBackgroundColor={attributes.submenuContainerBackgroundColor}
      $padding={attributes.submenuContainerPadding}
      className="mega-menu flex-col"
    >
      {items?.map((menuItem, menuItemIndex) => (
        <MenuListItem key={`item-normal-${menuItemIndex}`}>
          <MenuLink
            $padding={attributes.submenuLinkPadding}
            $color={attributes.submenuLinkColor}
            $colorSm={attributes.mobileSubmenuLinkColor}
            $hoverColor={attributes.submenuLinkHoverColor}
            $backgroundColor={attributes.submenuLinkBackgroundColor}
            $hoverBackgroundColor={attributes.submenuLinkHoverBackgroundColor}
            $fontWeight={attributes.fontWeight}
            $letterCase={attributes.letterCase}
            className="flex cursor-pointer items-center"
            href={menuItem.url}
          >
            {HTMLReactParser(menuItem.title || '')}
          </MenuLink>
        </MenuListItem>
      ))}
    </MegaMenuSubMenuWrapper>
  );
};
