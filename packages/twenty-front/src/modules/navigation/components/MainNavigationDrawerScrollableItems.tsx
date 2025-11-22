import { CurrentWorkspaceMemberFavoritesFolders } from '@/favorites/components/CurrentWorkspaceMemberFavoritesFolders';
import { WorkspaceFavorites } from '@/favorites/components/WorkspaceFavorites';
import { NavigationDrawerOpenedSection } from '@/object-metadata/components/NavigationDrawerOpenedSection';
import { RemoteNavigationDrawerSection } from '@/object-metadata/components/RemoteNavigationDrawerSection';
import styled from '@emotion/styled';

// Import necessary components for styling and linking
import { Link } from 'react-router-dom'; // Assuming react-router is used for internal links, 
                                          // but we'll use a standard <a> tag for the external link.
// If you have a specific Twenty CRM NavLink component, use it instead of <a>.

const StyledScrollableItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

// Added custom styling for the external link to visually match other items
const StyledExternalLink = styled.a`
  // Adjust this CSS to match the styling of the surrounding components (e.g., WorkspaceFavorites)
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(3)}; // Matching padding of other items
  height: 40px; // Standard height for navigation items
  color: ${({ theme }) => theme.palette.text.primary};
  text-decoration: none;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.shape.borderRadius};

  &:hover {
    background-color: ${({ theme }) => theme.palette.action.hover};
  }

  & > span {
    margin-left: ${({ theme }) => theme.spacing(2)};
  }
`;

export const MainNavigationDrawerScrollableItems = () => {
  const CHATWOOT_INBOX_URL = 'https://chatwoot-production-bdc3.up.railway.app/app/accounts/1/inbox-view'; // <<< REPLACE THIS

  return (
    <StyledScrollableItemsContainer>
      <NavigationDrawerOpenedSection />
      <CurrentWorkspaceMemberFavoritesFolders />
      <WorkspaceFavorites />
      {/* INJECTED CHATWOOT INBOX LINK 
        This is added as a standard HTML anchor tag, styled to look like a navigation item.
      */}
      <StyledExternalLink
        href={CHATWOOT_INBOX_URL}
        target="_blank"
        rel="noopener noreferrer" // Good practice for external links
        title="Open Chatwoot Inbox"
      >
        {/* 💬 is the icon, use a specific icon component if available (e.g., <IconChat />) */}
        💬 
        <span>Inbox</span>
      </StyledExternalLink>
      
      <RemoteNavigationDrawerSection />
    </StyledScrollableItemsContainer>
  );
};
