import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'zaki出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'zaki',
          href: 'https://www.yuque.com/g/u41530843/dq3z1y/zlmftwas0gf6z6gc/collaborator/join?token=n74YbP3Wnrctq09i&source=doc_collaborator# 《后端设计》',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> zaki Github
            </>
          ),
          href: 'https://github.com/z1327722636',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
