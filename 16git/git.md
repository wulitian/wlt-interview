# git

#### git������������

1. �ճ�����
git init ��ʼ���ֿ� �����ȳ�ʼ����add֮���ύ����Ҫgit remote add origin �ֿ��ַ��֮��push��Զ�ֿ̲⡣
git add . �ύȫ���޸��ļ���������
git add <���������ļ�ȫ��> �ύĳЩ�ļ���������
git diff �鿴��ǰ����add�󣬻�add��Щ����
git diff --staged�鿴����commit�ύ�󣬻��ύ��Щ����
git status �鿴��ǰ��֧״̬
git pull <Զ�ֿ̲���> <Զ�̷�֧��> ��ȡԶ�ֿ̲�ķ�֧�뱾��ĳ����֧�ϲ�
git pull <Զ�ֿ̲���> <Զ�̷�֧��>:<Զ�̷�֧��> ��ȡԶ�ֿ̲��ĳ����֧�뱾��ĳ����֧�ϲ�
git commit -m "<ע��>" �ύ���뵽���زֿ⣬��дע��
git commit -v �ύʱ��ʾ����diff��Ϣ
git commit --amend [file1] [file2] ������һ��commit������ָ�������ļ�
�ύ��ʽ��
feat:�����ԣ���ӹ���
fix:�޸�bug
refactor:�����ع�
docs:�ĵ��޸�
style:�����ʽ�޸�
test:���������޸�
chore:�����޸��繹��������������
2. ��֧����
git branch �鿴�������з�֧
git branch -r �鿴Զ�����з�֧
git branch -a �鿴Զ���뱾�����з�֧
git merge <��֧��> �ϲ���֧
git merge --about �ϲ���֧���ֳ�ͻʱ��ȡ���ϲ�
git branch <�·�֧��> ���ڵ�ǰ��֧�½���֧
git checkout --orphan <�·�֧��> �½�һ���շ�֧�ᱣ��֮ǰ��֧���ļ�
git branch -D <��֧��> ɾ������ĳһ����֧
git push <Զ�̿���>: <��֧��> ɾ��Զ��ĳһ����֧
git branch <�·�֧��> <�ύid> ���ύ��ʷ�ָ�ĳ��ɾ�����ķ�֧
git branch -m <ԭ��֧��> <�·�֧��> ��֧����
git checkout <��֧��> �л�������ĳһ����֧
git checkout <Զ�̿���>/<��֧��> �л�������ĳһ����֧
git checkout -b <�·�֧��> �ѻ��ڵ�ǰ��֧�½���֧�����л��������֧
3. Զ��ͬ��
git fetch [remote] ����Զ�ֿ̲�����б䶯
git remote -v ��ʾ����Զ�ֿ̲�
git pull [remote] [branch] ��ȡԶ�ֿ̲�ķ�֧�뱾�ص�ǰ��֧�ϲ�
git fetch ��ȡ�������°汾��Ϣ��¼�����ϲ�
git push [remote] [branch] �ϴ�����ָ����֧��Զ�ֿ̲�
git push [remote] --force ǿ�����͵�ǰ��֧��Զ�ֿ̲⣬��ʹ�г�ͻ
git push [remote] --all �������з�֧��Զ�ֿ̲�
4. ����
git checkout [file] �ָ��ݴ�����ָ���ļ���������
git checkout [commit] [file] �ָ�ĳ��commit��ָ���ļ����ݴ����͹�����
git checkout . �ָ��ݴ����������ļ���������
5. git reset [commit] ���õ�ǰ��֧��ָ��Ϊָ��commit��ͬʱ�����ݴ�����������������
6. git reset --hard �����ݴ����빤����������һ��commit����һ��
7. git reset [file] �����ݴ���ָ���ļ�������һ��commit����һ�£�������������
8. git revert [commit] ���ߵ����б仯�ᱻǰ�ߵ�������Ӧ�õ���ǰ��֧
9. �洢
git stash <���ֱ��ڲ���> ��ʱ��δ�ύ�ı仯�Ƴ�
git stash pop ȡ�����洢�Ĺ���״̬����ɾ���洢
git stash list �鿴���д洢����
git stash apply <�洢������> ȡ���洢��Ӧ�Ĺ���״̬���лָ�������ɾ���洢
git stash clear ������д洢
git stash drop <�洢������> ɾ����Ӧ��ĳ���洢
10. Դ����
git remote add origin {Զ�ֿ̲��ַ} ������ӵ�Զ�ֿ̲�
git remote -v �鿴���ӵĲֿ�

#### git merge �� rebase����
merge�ϲ�������һ��merge commit Ȼ��������֧��ʷ��ϵ��������ʵ��һ�ַ��ƻ������������з�֧�������κθ��ģ�
������ʷ��¼����Ը��ӡ�
rebase�Ὣ������֧�ƶ�������һ����֧�ϣ���Ч�����������з�֧���ύ��Ҫ����ʷ��¼������
����ԭ�е��ύ�����Ͻ��������ݷ�Ӧ��ȥ������������Ĳ���Ҫ��¼��
