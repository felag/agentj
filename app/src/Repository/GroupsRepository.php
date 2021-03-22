<?php

namespace App\Repository;

use App\Entity\Groups;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Captcha|null find($id, $lockMode = null, $lockVersion = null)
 * @method Captcha|null findOneBy(array $criteria, array $orderBy = null)
 * @method Captcha[]    findAll()
 * @method Captcha[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GroupsRepository extends ServiceEntityRepository {

  public function __construct(RegistryInterface $registry) {
    parent::__construct($registry, Groups::class);
  }

  /**
   * Return the groups associated to one or more domains
   * @param type $domains
   * @return type
   */
  public function findByDomain($domains) {
    $dql = $this->createQueryBuilder('g');
    
    if (is_array($domains->toArray())) {
        $domainsID = array_map(function ($entity) {
            return $entity->getId();
        }, $domains->toArray());
    } else {
        $domainsID = [];
    }
        
    if ($domainsID)
      $dql->where('g.domain in (' . implode(',', $domainsID) . ')');
    $query = $this->_em->createQuery($dql);
    
    return $query->getResult();
  }

  // /**
  //  * @return Captcha[] Returns an array of Captcha objects
  //  */
  /*
    public function findByExampleField($value)
    {
    return $this->createQueryBuilder('c')
    ->andWhere('c.exampleField = :val')
    ->setParameter('val', $value)
    ->orderBy('c.id', 'ASC')
    ->setMaxResults(10)
    ->getQuery()
    ->getResult()
    ;
    }
   */

  /*
    public function findOneBySomeField($value): ?Captcha
    {
    return $this->createQueryBuilder('c')
    ->andWhere('c.exampleField = :val')
    ->setParameter('val', $value)
    ->getQuery()
    ->getOneOrNullResult()
    ;
    }
   */
}